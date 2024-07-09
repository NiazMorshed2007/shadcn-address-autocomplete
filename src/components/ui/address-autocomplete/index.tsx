"use client";

import { FormMessages } from "@/components/form-messages";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandList
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { fetcher } from "@/utils/fetcher";
import { Delete, Loader2, Pencil } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import AddressDialog from "./address-dialog";

import { Command as CommandPrimitive } from "cmdk";

export interface AddressType {
	address1: string;
	address2: string;
	formattedAddress: string;
	city: string;
	region: string;
	postalCode: string;
	country: string;
	lat: number;
	lng: number;
}

interface AddressAutoCompleteProps {
	address: AddressType;
	setAddress: (address: AddressType) => void;
	searchInput: string;
	setSearchInput: (searchInput: string) => void;
	dialogTitle: string;
	showInlineError?: boolean;
	placeholder?: string;
}

export default function AddressAutoComplete(props: AddressAutoCompleteProps) {
	const {
		address,
		setAddress,
		dialogTitle,
		showInlineError = true,
		searchInput,
		setSearchInput,
		placeholder,
	} = props;

	const [selectedPlaceId, setSelectedPlaceId] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const { data, isLoading } = useSWR(
		selectedPlaceId === "" ? null : `/api/address/place?placeId=${selectedPlaceId}`,
		fetcher,
		{
			revalidateOnFocus: false,
		},
	);

	const adrAddress = data?.data.adrAddress;

	useEffect(() => {
		if (data?.data.address) {
			setAddress(data.data.address as AddressType);
		}
	}, [data, setAddress]);

	return (
		<>
			{selectedPlaceId !== "" || address.formattedAddress ? (
				<div className="flex items-center gap-2">
					<Input value={address?.formattedAddress} readOnly />

					<AddressDialog
						isLoading={isLoading}
						dialogTitle={dialogTitle}
						adrAddress={adrAddress}
						address={address}
						setAddress={setAddress}
						open={isOpen}
						setOpen={setIsOpen}
					>
						<Button
							disabled={isLoading}
							size="icon"
							variant="outline"
							className="shrink-0"
						>
							<Pencil className="size-4" />
						</Button>
					</AddressDialog>
					<Button
						type="reset"
						onClick={() => {
							setSelectedPlaceId("");
							setAddress({
								address1: "",
								address2: "",
								formattedAddress: "",
								city: "",
								region: "",
								postalCode: "",
								country: "",
								lat: 0,
								lng: 0,
							});
						}}
						size="icon"
						variant="outline"
						className="shrink-0"
					>
						<Delete className="size-4" />
					</Button>
				</div>
			) : (
				<AddressAutoCompleteInput
					searchInput={searchInput}
					setSearchInput={setSearchInput}
					selectedPlaceId={selectedPlaceId}
					setSelectedPlaceId={setSelectedPlaceId}
					setIsOpenDialog={setIsOpen}
					showInlineError={showInlineError}
					placeholder={placeholder}
				/>
			)}
		</>
	);
}

interface CommonProps {
	selectedPlaceId: string;
	setSelectedPlaceId: (placeId: string) => void;
	setIsOpenDialog: (isOpen: boolean) => void;
	showInlineError?: boolean;
	searchInput: string;
	setSearchInput: (searchInput: string) => void;
	placeholder?: string;
}

function AddressAutoCompleteInput(props: CommonProps) {
	const {
		setSelectedPlaceId,
		selectedPlaceId,
		setIsOpenDialog,
		showInlineError,
		searchInput,
		setSearchInput,
		placeholder,
	} = props;

	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Escape") {
			close();
		}
	};

	const debouncedSearchInput = useDebounce(searchInput, 500);

	const { data, isLoading } = useSWR(
		// For real use case: /api/address/autocomplete?input=${debouncedSearchInput}
		`/api/address/mock?input=${debouncedSearchInput}`,
		fetcher,
	);

	const predictions = data?.data || [];

	console.log(JSON.stringify(predictions));


	return (
		<Command
			shouldFilter={false}
			onKeyDown={handleKeyDown}
			className="overflow-visible"
		>
			<div className="flex w-full items-center justify-between rounded-lg border bg-background ring-offset-background text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
				<CommandPrimitive.Input
					value={searchInput}
					onValueChange={setSearchInput}
					onBlur={close}
					onFocus={open}
					placeholder={placeholder || "Enter address"}
					className="w-full p-3 rounded-lg outline-none"
				/>
			</div>
			{searchInput !== "" && !isOpen && !selectedPlaceId && showInlineError && (
				<FormMessages
					type="error"
					className="pt-1 text-sm"
					messages={["Select a valid address from the list"]}
				/>
			)}

			{isOpen && (
				<div className="relative animate-in fade-in-0 zoom-in-95 h-auto">
					<CommandList>
						<div className="absolute top-1.5 z-50 w-full">
							<CommandGroup className="relative h-auto z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md bg-background">
								{isLoading ? (
									<div className="h-28 flex items-center justify-center">
										<Loader2 className="size-6 animate-spin" />
									</div>
								) : (
									<>
										{predictions.map((prediction: {
											placePrediction: {
												placeId: string;
												place: string;
												text: { text: string };
											};
										}) => (
											<CommandPrimitive.Item
												value={prediction.placePrediction.text.text}
												onSelect={() => {
													setSearchInput("");
													setSelectedPlaceId(prediction.placePrediction.place);
													setIsOpenDialog(true);
												}}
												className="flex select-text flex-col cursor-pointer gap-0.5 h-max p-2 px-3 rounded-md aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground items-start"
												key={prediction.placePrediction.placeId}
												onMouseDown={(e) => e.preventDefault()}
											>
												{prediction.placePrediction.text.text}
											</CommandPrimitive.Item>
										))}
									</>
								)}

								<CommandEmpty>
									{!isLoading && predictions.length === 0 && (
										<div className="py-4 flex items-center justify-center">
											{searchInput === "" ? "Please enter an address" : "No address found"}
										</div>
									)}
								</CommandEmpty>
							</CommandGroup>
						</div>
					</CommandList>
				</div>
			)}
		</Command>
	);
}

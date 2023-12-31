"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export const GenerationContext = createContext({
	generation: null,
	setGeneration: null,
	isLoading: false,
} as any);

export const GenerationProvider = ({ children }: { children: ReactNode }) => {
	const [generation, setGeneration] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<GenerationContext.Provider
			value={{ generation, setGeneration, isLoading, setIsLoading }}
		>
			{children}
		</GenerationContext.Provider>
	);
};

export const useGenerationContext = () => useContext(GenerationContext);

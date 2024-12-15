'use client'

import { PropsWithChildren, useState } from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ThemeProvider } from "@/Providers/Theme.provider";

export function Providers({children}: PropsWithChildren){
    const [client] = useState(
        new QueryClient({
            defaultOptions:{
                queries:{
                    refetchOnWindowFocus: false
                }
            }
        })
    )

    return (
        <QueryClientProvider client={client}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}
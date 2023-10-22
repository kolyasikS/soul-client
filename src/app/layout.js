import '../styles/globals.css'
import { Gantari } from 'next/font/google'
import LayoutContainer from "../processes/layoutContainer/LayoutContainer";
import {headers} from "next/headers";
import store from "../lib/store/store";
import {Provider} from "react-redux";
import WithStoreProvider from "../processes/store-provider/WithStoreProvider";

const inter = Gantari({ subsets: ['latin'] })

async function getAuthenticatedUser() {
    const headersList = headers();
    const user = JSON.parse(headersList.get('user'));

    return user;
}
export default async function RootLayout({ children }) {

    const user = await getAuthenticatedUser(); // review
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className} style={{marginRight: '0px !important'}}>
                <WithStoreProvider>
                    <LayoutContainer user={user}>
                        {children}
                    </LayoutContainer>
                </WithStoreProvider>
            </body>
        </html>
    )
}

import React from 'react';
import { BiSearch } from "react-icons/bi";



export default function SearchBar() {
    return (
        <div class="mb-1 xl:w-96">
            <div class="relative flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                    class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon3" />

                {/* <!--Search button--> */}
                <button
                    className="ml-2 relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-black transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-0"
                    type="button"
                    id="button-addon3"
                    data-te-ripple-init>
                    Search
                </button>
            </div>
        </div>
    )
}

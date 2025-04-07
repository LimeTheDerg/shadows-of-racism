import React from 'react';
import Logo from "@/components/ui/logo";
import Button from "@/components/ui/button";
function App() {
    return (
        <div className="font-inter flex flex-row justify-center h-85">
            <div className="flex justify-center content-end items-center w-1/2">
                <Logo size="65px"/>
            </div>
            <div className="verticaline"></div>
            <div className="flex flex-col gap-2 justify-center mx-auto bg-white w-1/2 hover:bg-gray-100 trabsition duration-400 ease-in-out">
                <h1 className="text-center font-extrabold text-2xl font-inter text-black">Sign In</h1> 
                <div className='mx-auto'>
                    <Button variant={'signin'} className='p-5 text-1xl font-inter'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"/>
                        Sign in with Google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;

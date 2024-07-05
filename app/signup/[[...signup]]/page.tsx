import { SignUp } from '@clerk/nextjs';

export default function Auth() {
    return (
        <div className="px-1 justify-around flex flex-row items-center h-screen">
            <div className="pr-10">
                <span>
                    <b>With our Platform, </b>you can open a new door to a totally new experience of online services
                </span>
            </div>
            <SignUp/>
        </div>
    );
}

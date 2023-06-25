import ButtonPrimary, { ButtonSecondary } from "./Button";
import { UilPlus } from "@iconscout/react-unicons";
import { UilSignout } from "@iconscout/react-unicons";

export default function Navbar() {
    return (
        <div className="ml-auto py-5 px-5 flex justify-between ">
            <ButtonPrimary>
                <UilPlus /> Create
            </ButtonPrimary>
            <ButtonSecondary>
                <UilSignout /> Log Out
            </ButtonSecondary>
        </div>
    );
}

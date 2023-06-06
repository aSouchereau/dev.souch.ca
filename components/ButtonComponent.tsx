import {ReactElement, ReactNode} from "react";
import {Icon} from "@phosphor-icons/react";

type ButtonProps = {
    children: ReactNode;
    icon?: ReactElement<Icon>;
    destination: string;
    buttonType: 'solid' | 'outline' | 'text';
}

export default function ButtonComponent({ children, icon, buttonType, destination }: ButtonProps) {
    return <a className={'button ' + buttonType}
                href={destination}
              target="_blank"
    >
        {icon}
        {children}
    </a>
}
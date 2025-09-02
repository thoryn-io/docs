import {PropsWithChildren} from "react";

type HeaderCardProps = {
    title: string;
};

export default function HeaderCard({
                                     title,
                                 }: PropsWithChildren<HeaderCardProps>) {
    return (
        <div className="mb-2 px-8 text-md uppercase">{title}</div>
    );
}
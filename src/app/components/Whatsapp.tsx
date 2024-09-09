import { MdWhatsapp } from "react-icons/md";

export function Whatsapp() {

return (

<div className="fixed right-5 bottom-8 md:group">
    <a href="https://wa.me/" target='_blank' rel="noreferrer"
        className="flex items-center justify-center text-white bg-green-600 rounded-full w-14 h-14 hover:bg-green-700">
        <MdWhatsapp size={35} />
    </a>
</div>
);
}
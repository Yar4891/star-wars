const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-gray h-20 grid grid-cols-10 items-center">
            <div className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white text-center col-start-3`}>Send me email</div>
        </footer>
    );
};

export default Footer;
const NavItem = ({itemTitle, changePage}) => {
    return (
        <div onClick={() => changePage(itemTitle)}
             className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white`}>{itemTitle}</div>
    );
};

export default NavItem;
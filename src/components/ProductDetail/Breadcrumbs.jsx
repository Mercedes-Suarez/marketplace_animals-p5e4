import { useLocation } from "react-router";

function Breadcrumbs() {
    const location = useLocation();

    let currentPath = '';

    const crumbs = location.pathname.split('/');
    console.log(crumbs);
 return (
    <div>Breadcrumbs</div>
 );
}

export default Breadcrumbs;
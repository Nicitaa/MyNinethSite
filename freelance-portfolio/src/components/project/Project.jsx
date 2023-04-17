import { NavLink } from "react-router-dom";
import { projects } from "../../helpers/PorjectsList";

const Project = ({title,img,index}) => {
    return (
        <NavLink to={"/project/" + index}>
        <li class="project">
                <img src={img} alt={title} className="project__img"/>
                <h3 className="project__title">Video service</h3>
        </li>
        </NavLink>
    );
}

export default Project;
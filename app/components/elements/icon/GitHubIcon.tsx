import IconTheme from "./IconTheme";
import { FaGithub } from "react-icons/fa";

const GitHubIcon: React.FC = ()=> {
    return (
        <IconTheme href="https://github.com/tomoki013">
            <FaGithub />
        </IconTheme>
    );
}

export default GitHubIcon;

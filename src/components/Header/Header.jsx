import { Logo } from 'components/logo';
import s from './Header.module.css';
import logo from 'assets/images/logo.png';
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export function Header(props) {
  const navigate = useNavigate();
    return (
        <div className={`row ${s.container}`}>
            <div className="col-xs-12 col-sm-4">
            <Logo
          onClick={() => navigate("/")}
          title="Notomatic"
          subtitle="Manage your notes"
          image={logo}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/note/new")}>
          Add note +
        </ButtonPrimary>
      </div>
    </div>
  );
}
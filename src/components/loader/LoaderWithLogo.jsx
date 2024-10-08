// STYLED COMPONENT
import { RootStyle } from './styles';
export default function LoaderWithLogo() {
  return <RootStyle className="loading-wrapper">
      <div className="logo">
        <img src="/static/logo/logo-ultim-violeta.png" alt="uko" />
      </div>

      <div className="loading-content"></div>
    </RootStyle>;
}
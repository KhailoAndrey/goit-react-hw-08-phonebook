import { ThreeDots } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <WrapperLoader>
      <ThreeDots
        height="30"
        width="180"
        radius="10"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </WrapperLoader>
  );
};

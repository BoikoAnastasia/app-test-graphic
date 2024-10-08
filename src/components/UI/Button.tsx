import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Button } from '@consta/uikit/Button';

export const ButtonComponent = ({
  activeKey,
  keyName,
  label,
  handleClick,
}: {
  activeKey: string;
  keyName: string;
  label:string,
  handleClick: () => void;
}) => {
  return (
    <Theme preset={presetGpnDefault}>
      <Button
        view={activeKey === keyName ? 'primary' : 'clear'}
        label={label}
        onClick={handleClick}
      />
    </Theme>
  );
};

import { settings } from "../assets/images";
import { useChat } from "../context/ChatContext";
import PropTypes from 'prop-types';

const SettingButton = ({ handleSettings }) => {
  const { isTalking, isTyping } = useChat();

  return (
    <button
      disabled={isTalking || isTyping ? true : false}
      onClick={handleSettings}
      className="rounded-full"
    >
      <img src={settings} className={`${isTalking || isTyping ? 'opacity-40' : 'opacity-100'}`} alt="Settings" />
    </button>
  )
}

SettingButton.propTypes = {
  handleSettings: PropTypes.func.isRequired,
};

export default SettingButton
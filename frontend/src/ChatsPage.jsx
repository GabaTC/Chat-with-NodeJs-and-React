import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "1fc6b66a-cf69-4c85-ba97-80752ff82926",
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  )
};

export default ChatsPage;

import { Alert } from "react-native";

type TypeProps = {
  title: string;
  description?: string;
  onPressOk: () => void;
};
const MyDialog = (props: TypeProps) => {
  const { title, onPressOk } = props;
  return Alert.alert(title, props.description, [
    {
      text: "Cancelar",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: onPressOk }
  ]);
};

export default MyDialog;

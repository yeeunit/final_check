import { Modal } from "antd";

export function checkValidationImage(file: File | undefined) {
  if (!file?.size) {
    Modal.error({ content: "파일 없음" });
    return false;
  }
 
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({ content: "png, jpeg만 가능" });
    return false;
  }
  return file;
}

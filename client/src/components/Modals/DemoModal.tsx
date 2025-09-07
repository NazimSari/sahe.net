import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

// Props için TypeScript tipi tanımlıyoruz
interface DemoModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  message?: string;
  closeButtonText?: string;
}

const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  setIsOpen,
  title = "Hey, Bu Bir Demo!",
  message = "Merhaba! 😊 Şu an demo sürümdesin, o yüzden sonuçlar biraz sınırlı olabilir. Bu versiyon sadece ön izleme için hazırlandı. Tam sürüm hazır olduğunda sana maille haber vereceğiz, merak etme!",
  closeButtonText = "Kapat",
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-white border-[#040519]">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium text-[#040519]">
            {title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            {message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => setIsOpen(false)}
            className="bg-[#040519] text-white cursor-pointer"
          >
            {closeButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;

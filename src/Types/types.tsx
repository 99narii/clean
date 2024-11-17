export interface AnimationProps {
    className?: string;
  }
  
export interface HeaderProps {
  scrollToMain: () => void;
  scrollToEstimate: () => void; 
}
  
export interface TopProps {
  scrollToTop: () => void;
}

export interface ModalProps {
  onConfirm: () => void;
  msg: string;
  isOpen: boolean;
  onClose: () => void;
}
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from 'react';
import { ModalProps } from "../../Types/types";
import './style.scss';

export default function ModalComponent({ msg, onConfirm, isOpen, onClose }:ModalProps) {
    return (
        <>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody pb={6}>
                        <div className="modal_msg">{msg}</div>
                    </ModalBody>
                    <ModalFooter display="flex" justifyContent="center" >
                        <Button  bg={'#B0BEC5'} size='lg'   mr={3} onClick={onConfirm}>
                            확인
                        </Button>
                        <Button onClick={onClose} size='lg'  >취소</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

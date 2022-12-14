package net.yorksolutions.backend.service;

import net.yorksolutions.backend.entity.Message;
import net.yorksolutions.backend.repository.MessageRepository;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public Message addMessage(String text) {
        return messageRepository.save(new Message(text));
    }

    public Iterable<Message> getMessageList() {
        return messageRepository.findAll();
    }
}

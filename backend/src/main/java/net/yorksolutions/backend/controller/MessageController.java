package net.yorksolutions.backend.controller;

import net.yorksolutions.backend.entity.Message;
import net.yorksolutions.backend.service.MessageService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/message")
public class MessageController {

    MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public Message addMessage(@RequestBody Message request) {
        return messageService.addMessage(request.getMessage());
    }

    @GetMapping
    public Iterable<Message> getMessageList() {
        return messageService.getMessageList();
    }

}

package pro.cherkassy.rboyko.controllers;

import org.apache.coyote.http2.Stream;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

/**
 * Created by rboyko on 28.11.16.
 */
@Controller
public class Index {
    @RequestMapping("/")
    public String index(){
        ArrayList<String> s= new ArrayList<>();
        return "index";
    }
}

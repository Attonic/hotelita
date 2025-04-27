package com.hotelita.hoteis.controller;

import com.hotelita.hoteis.model.Hotel;
import com.hotelita.hoteis.service.HoteisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(value = "/hoteis")
@CrossOrigin(origins = "*")
public class HotelController {

    @Autowired
    private HoteisService hoteisService;

    @GetMapping
    public ResponseEntity<List<Hotel>> findAll() {
        List<Hotel> hotel = hoteisService.findAll();
        return ResponseEntity.ok().body(hotel);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Hotel> findById(@PathVariable Long id){
        Hotel obj = hoteisService.buscarPorId(id);
        return ResponseEntity.ok(obj);
    }

    @GetMapping(value = "/populares")
    public ResponseEntity<List<Hotel>> maisVisitados(){
        List<Hotel> hotel = hoteisService.maisVisitados();
        return ResponseEntity.ok(hotel);
    }

    @PutMapping("/{id}/incrementar-visitas")
    public ResponseEntity<Void> incrementarVisitas(@PathVariable Long id) {
        hoteisService.incrementarVisitas(id);
        return ResponseEntity.ok().build();
    }
}

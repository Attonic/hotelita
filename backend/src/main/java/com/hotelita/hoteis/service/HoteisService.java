package com.hotelita.hoteis.service;

import com.hotelita.hoteis.model.Hotel;
import com.hotelita.hoteis.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Component
public class HoteisService {

    @Autowired
    private final HotelRepository hotelRepository;

    public HoteisService(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    public List<Hotel> findAll() {
        return hotelRepository.findAll();
    }

    /*public Hotel findByID(long id){
        Optional<Hotel> obj = hotelRepository.findById(id);
        return obj.orElse(null);
    }*/

    public Hotel buscarPorId(long id) {
        Hotel hotel = hotelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel com ID " + id + " não encontrado."));
        hotel.setVisitas(hotel.getVisitas() + 1); // Incrementa o número de visitas
        hotelRepository.save(hotel); // Salva a atualização no banco
        return hotel;
    }

    public List<Hotel> maisVisitados(){
        return hotelRepository.findTop5ByOrderByVisitasDesc();
    }

    public void incrementarVisitas(Long id) {
        Hotel hotel = hotelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel não encontrado com id: " + id));
        hotel.setVisitas(hotel.getVisitas() + 1);
        hotelRepository.save(hotel);
    }
}

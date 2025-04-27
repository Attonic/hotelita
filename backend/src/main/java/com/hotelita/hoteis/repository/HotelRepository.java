package com.hotelita.hoteis.repository;

import com.hotelita.hoteis.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
    List<Hotel> findTop5ByOrderByVisitasDesc();
}

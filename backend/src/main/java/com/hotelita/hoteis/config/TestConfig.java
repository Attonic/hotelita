package com.hotelita.hoteis.config;

import com.hotelita.hoteis.model.Hotel;
import com.hotelita.hoteis.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private final HotelRepository hotelRepository;

    public TestConfig(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }


    @Override
    public void run(String... args) throws Exception {
        System.out.println("TestConfig está sendo executado...");

        Hotel h1 = new Hotel(null, "Hotel Brasil", "https://i.ibb.co/Gff7nbjs/HBrasil.png", "Quartos: Simples, Casal, Triplo, Outros - Avenida Brasil 219", "(98) 98569-0708", 0);

        //Hotel Por Do sol
        Hotel h2 = new Hotel(null, "Hotel Por do Sol", "https://i.ibb.co/C3z3jqvJ/HPsol.png", "Quartos: Casal, Triplo, Suíte, 6 quartos - BR-222 n12", "(98) 99190-9730", 0);

        //Hotel Plaza
        Hotel h3 = new Hotel(null, "Plaza Hotel e Restaurante", "https://i.ibb.co/MyF6Vcqc/PlazaH2.png", "Quartos: Simples, Casal, Triplo, Outros - R. do Sol, 350", "(98)99905-4208", 0);

        //Hotel Green
        Hotel h4 = new Hotel(null, "Hotel Green Villages", "https://i.ibb.co/NnNLVCDG/HGreenV.jpg", "Quartos: Casal, Triplo, Suíte - Br 222 km 12", "(98)99905-4208", 0);

            hotelRepository.saveAll(Arrays.asList(h1, h2, h3));
            System.out.println("Banco de dados populado com hotéis iniciais!");

    }
}


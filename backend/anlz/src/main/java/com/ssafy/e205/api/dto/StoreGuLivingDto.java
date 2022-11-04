package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.entity.StoreHinGu;
import com.ssafy.e205.db.repository.StoreHinGuRepository;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreGuLivingDto {

    String guName;
    int living;
    int level;

    public StoreGuLivingDto(StoreGu storeGu){
        guName = storeGu.getGuName();
        living = storeGu.getLiving();
    }

    public StoreGuLivingDto(StoreHinGu storeGu){
        guName = storeGu.getGuName();
        living = storeGu.getLiving();
    }

    public StoreGu toEntity(){
        return StoreGu.builder()
                .guName(guName)
                .living(living)
                .build();
    }

}
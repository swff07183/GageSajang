package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.FavoriteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;

public interface FavoriteRepository extends JpaRepository<FavoriteEntity, Integer> {
    @Lock(LockModeType.PESSIMISTIC_FORCE_INCREMENT)
    @QueryHints({@QueryHint(name="javax.persistence.lock.timeout", value = "10000")}) //mariaDB 에선 작동안함

    FavoriteEntity findByEmail(String email);
    Object save(FavoriteEntity favoriteEntity);

}

package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Restaurant;

@Repository
public interface Restorepository extends JpaRepository<Restaurant,Integer>
{

}

package com.loan.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.loan.entity.LoanApplication;

@Repository
@Transactional
public interface LoanRepository extends JpaRepository<LoanApplication, Long>{

}

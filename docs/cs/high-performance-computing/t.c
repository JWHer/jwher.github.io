int64_t leaf_procedure(int64_t g, int64_t h, int64_t i, int64_t j)
{
    int64_t f;
    f = (g + h) - (i + j);
    return f;
}

jal  x1, leaf_procedure
addi sp, sp, -8 // 1개 변수를 위해 스택을 조정한다
sd   x20, 0(sp) // x20을 저장해 다음에 사용할 수 있게 한다

add t0, x10, x11 // t0 = g + h
add t1, x12, x13 // t1 = i + j
sub x20, t0, t1  // f = t0 - t1 = (g + h) - (i + j)

addi x10, x20, 0 // return f x10 = x20 + 0

ld   x20, 0(sp) // x20을 복원한다
addi sp, sp, 8  // 1개 변수를 지우고 스택을 조정한다
jalr x0, 0(x1)  // 복귀

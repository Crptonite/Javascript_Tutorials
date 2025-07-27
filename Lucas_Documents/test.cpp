#include <iostream>
#include <type_traits>

int main() {
    std::cout << std::boolalpha;
    std::cout << "Is float a floating-point type? " << std::is_floating_point_v<float> << '\n';
    std::cout << "Is int a floating-point type? " << std::is_floating_point_v<int> << '\n';
    return 0;
}
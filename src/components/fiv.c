#include "stdio.h"
int fib(int first,int sec,int n){
    printf("%d ",first);
    printf("%d ",sec);
    
    int tmp=first;  
    for(int i=2; i < n;i+=1){
        tmp=tmp+sec ;
        printf("%d ",(tmp));
        int t=tmp;
        tmp=sec;
        sec=t;
    
    }

}

int main(){

    int first=0;
    int sec=1;

    int n=10;

    fib(first,sec,n);
    return 0;
}
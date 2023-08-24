#include<bits/stdc++.h>
#include<iostream>
#include<cmath>
//vd xd lop hinh chu nhat
using namespace std;
class HT{
    private : float bk;
    public : void nhap();void in();
    float tinhdt(){
        return 3.14*bk*bk;
    }
};
void HT::nhap(){
    cout<<"nhap bk:";
    cin>>bk;
}
void HT::in(){
    cout<<bk;
}
int main(){
    HT h ;
h=new HT;
    h.nhap();
    h.in();
    cout<<"\ndt hinh tron la "<<h.tinhdt();
}

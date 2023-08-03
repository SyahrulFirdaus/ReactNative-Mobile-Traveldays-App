import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { WARNA_DISABLE, WARNA_HEADER, WARNA_PUTIH } from '../../../utils/warna'
import { Notification, Settings, Post, Share } from '../../../assets'

const LihatProfil = ({navigation}) => {
  return (
    <View>

        <View style={styles.header}>
            <View style={styles.Container}>
                <Text style={styles.label}>Haura Nabilla</Text>
                <View style={{marginHorizontal: 50}}></View>
                    <TouchableOpacity onPress={() => navigation.navigate("ComponentNotifikasi")}>
                    <Notification/>
                    </TouchableOpacity>
                    
                <View style={{marginHorizontal: 10}}></View>
                
                <TouchableOpacity onPress={() => navigation.navigate("ComponentChat")}>
                <Settings />
                </TouchableOpacity>

                <View style={{marginHorizontal: 8}}></View>

                <TouchableOpacity onPress={() => navigation.navigate("ComponentChat")}>
                <Share />
                </TouchableOpacity>
                
            </View>
        </View>

   
        <View style={styles.profil}>

            <View style={styles.PhotoProfil}>
                <Text style={styles.TextPhotoProfil}>HN</Text>
            </View>
            <View>
            <TouchableOpacity>
            <View style={styles.UbahProfil}>
                <Text style={styles.TextUbahProfil}>Ubah Profil</Text>
            </View>
            </TouchableOpacity>
      
            </View>
          
   

            <View style={styles.SumActivity}>
           
                <Text style={styles.SumActivitySosial}>0</Text>
              
                <View style={{marginHorizontal:50}}></View>
                <Text style={styles.SumActivitySosial}>0</Text>
                <View style={{marginHorizontal:50}}></View>
                <Text style={styles.SumActivitySosial}>0</Text>

            </View>
            <View style={styles.LabelActivity}>
                <Text style={styles.SumActivitySosial}>Post</Text>
                <View style={{marginHorizontal:36}}></View>
                <Text style={styles.SumActivitySosial}>Pengikut</Text>
                <View style={{marginHorizontal:25}}></View>
                <Text style={styles.SumActivitySosial}>Mengikuti</Text>
            </View>
          
        </View>

        <View style={styles.Beranda}>
            <Text style={styles.TextBeranda}>Post</Text>
            <Text style={styles.TextBeranda}>Review</Text>
            <Text style={styles.TextBeranda}>Koleksi</Text>
        </View>
        <Post style={{marginLeft: -33, marginTop: 30}}/>
        <Text style={{fontWeight:'bold', textAlign: 'center', marginTop:-20}}>Unggah post pertama Anda</Text>
        <Text style={{textAlign:'center', color:WARNA_DISABLE,fontSize: 13, marginTop: 5}}>Masukan post Anda ke halaman Explore dan bantu{"\n"}
        pengguna lain menemukan pilihan terbaik untuk{"\n"}
        kebutuhan mereka.</Text>
    </View>
  )
}

export default LihatProfil

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    header : {
        backgroundColor: WARNA_HEADER,
        width: windowWidth,
        height: windowHeight*0.30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    Container: {
        flexDirection: 'row',
        marginTop: 40
    },
    label : {
        marginLeft: 15,
        fontSize: 18,
        color: WARNA_PUTIH
    },
    profil : {
        backgroundColor : WARNA_PUTIH,
        marginHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 10,
        marginTop: -125,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    UbahProfil: {
        backgroundColor : WARNA_HEADER,
        marginHorizontal: 220,
        borderRadius: 10,
        marginTop: -70,
        marginRight: 10
    },
    TextUbahProfil:{
        paddingVertical: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: WARNA_PUTIH
    },
    SumActivity: {
        marginVertical: 50,
        flexDirection:'row',
        paddingLeft: 50
    },
    LabelActivity: {
        marginTop: -44,
        flexDirection:'row',
        paddingLeft: 40
    },
    PhotoProfil: {
        backgroundColor: WARNA_DISABLE,
        width: windowWidth*0.20,
        height: windowHeight * 0.10,
        marginLeft: 20,
        borderRadius:20,
        marginTop: -10
    },
    TextPhotoProfil: {
        textAlign: 'center',
        paddingTop: 14,
        fontSize: 30,
        fontWeight:'bold',
        color: WARNA_PUTIH
    },
    Beranda: {
        flexDirection: 'row',
        backgroundColor: WARNA_PUTIH,
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderColor: WARNA_DISABLE
    },
    TextBeranda: {
        fontSize: 15,
        paddingLeft: 35,
        paddingVertical: 5,
        color: WARNA_DISABLE,
 
    }

})
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { WARNA_HEADER, WARNA_PUTIH } from '../../../utils/warna'
import { NotificationPush, Passenger, RightArrow } from '../../../assets/icon'
import { Left, SettingUser, Verified, Private, Newsletter, Shutdown } from '../../../assets/icon'


const ComponentSetting = ({navigation}) => {
  return (
    <View>
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.Header}>
      <Text style={styles.LabelHeader}>Pengaturan</Text>
      <Left style={{marginLeft:20, marginTop:-23}} />
    </View>

    <View style={{marginVertical: 20}}></View>
    <Text style={styles.label}>AKUN & KEAMANAN</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <View style={styles.Button}>
        <Text style={styles.labelContent}>Informasi Akun</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>
    <View>
    <SettingUser style={{marginTop: -35, marginLeft: 20}} / >
    </View>
 
    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 0.5}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContent}>Password & Keamanan</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

    <View>
    <Verified style={{marginTop: -35, marginLeft: 20}} / >
    </View>

    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 0.5}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContent}>Privasi Profil</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

        
    <View>
    <Private style={{marginTop: -35, marginLeft: 20}} / >
    </View>

    </View>
    </TouchableOpacity>

    
    <View style={{marginVertical: 20}}></View>
    <View style={styles.preferensi}>

    <Text style={styles.label}>PREFERENSI</Text>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContentPreferensi}>Negara</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 0.5}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContentPreferensi}>Mata Uang</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 0.5}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContentPreferensi}>Bahasa</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>
    </View>
    </TouchableOpacity>
    </View>

    <View style={{marginVertical: 8}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContent}>Passenger Quick Pick</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>
        
        <View>
            <Passenger style={{marginTop: -35, marginLeft: 20}} / >
        </View>


    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 0.5}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContent}>Notifikasi Push</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

        <View>
            <NotificationPush style={{marginTop: -35, marginLeft: 25}} / >
        </View>

    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 0.5}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContent}>Newsletter & Info Promo</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

        <View>
            <Newsletter style={{marginTop: -35, marginLeft: 25}} / >
        </View>

    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 8}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContentPreferensi}>Versi App</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 0.5}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContentPreferensi}>Syarat & Ketentuan </Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 0.5}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContentPreferensi}>Kebijakan Privasi</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 0.5}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContentPreferensi}>Tentang Kita</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

    </View>
    </TouchableOpacity>

    <View style={{marginVertical: 10}}></View>
    <TouchableOpacity>
    <View style={styles.Button}>
        <Text style={styles.labelContent}>Keluar</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

        <View>
            <Shutdown style={{marginTop: -35, marginLeft: 25}} / >
        </View>

    </View>
    </TouchableOpacity>
    
    </ScrollView>
    </View>

  )
}

export default ComponentSetting
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    Header : {
        backgroundColor: WARNA_HEADER,
        width: windowWidth,
        height:windowHeight*0.13
    },
    LabelHeader: {
        marginTop: 45,
        fontSize: 17,
        paddingLeft: 60,
        color: WARNA_PUTIH
    },
    Button: {
        backgroundColor: WARNA_PUTIH
    },
    labelContent: {
        paddingLeft: 60,
        fontSize: 15,
        paddingVertical: 15
    },
    
    label: {
        paddingLeft: 60,
        fontSize: 14,
        marginTop: -14,
        marginBottom: 10
    },
    labelContentPreferensi:{
        paddingLeft: 15,
        fontSize: 15,
        paddingVertical: 15
    },
    ContainerRightArrow: {
        justifyContent:'center',
        alignItems: 'center',
        
      },
      RightArrow: {
        marginTop: -50,
        marginLeft: 310
      },
 
})
import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';

const WelcomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Tło jako ImageBackground - bg-1.jpg */}
            <ImageBackground source={require('../assets/images/bg-1.jpg')} style={styles.background}>
                <View style={styles.overlay}>
                    {/* Logo - Dark@2x.png */}
                    <Image source={require('../assets/images/Dark@2x.png')} style={styles.logo} />
                    <Text style={styles.title}>Witaj w Duet!</Text>
                </View>
            </ImageBackground>

            {/* Sekcja z gradientem z bg-3.png */}
            <ImageBackground source={require('../assets/images/bg-3.png')} style={styles.sectionBackground}>
                <Text style={styles.sectionTitle}>Znajdź swoją melodię</Text>
                <Text style={styles.sectionText}>
                    Duet to aplikacja, która łączy muzyków w Twojej okolicy. Niezależnie od instrumentu, znajdziesz kogoś do jamowania.
                </Text>
            </ImageBackground>

            {/* Sekcja z podglądem aplikacji - app-map.png */}
            <View style={styles.appPreviewSection}>
                <Text style={styles.previewTitle}>Odkryj muzyków na mapie</Text>
                <Image source={require('../assets/images/app-map.png')} style={styles.appScreenshot} />
                <Text style={styles.sectionText}>
                    Zobacz, kto gra w Twojej okolicy i nawiąż nowe kontakty muzyczne.
                </Text>
            </View>

            {/* Sekcja z menedżerem kariery - app-manager.png */}
            <View style={styles.appPreviewSection}>
                <Text style={styles.previewTitle}>Twój osobisty menedżer kariery</Text>
                <Image source={require('../assets/images/app-manager.png')} style={styles.appScreenshot} />
                <Text style={styles.sectionText}>
                    Spersonalizowany asystent AI pomoże Ci rozwijać swoje umiejętności i karierę muzyczną.
                </Text>
            </View>

            {/* Możesz dodać więcej sekcji z innymi grafikami, np. app-hero.png */}
            <View style={styles.appPreviewSection}>
                <Text style={styles.previewTitle}>Zacznij swoją przygodę z Duet!</Text>
                <Image source={require('../assets/images/app-hero.png')} style={styles.appScreenshot} />
            </View>

            {/* Proste tło jednolite - bg-2.png */}
            <ImageBackground source={require('../assets/images/bg-2.png')} style={styles.footerBackground}>
                <Text style={styles.footerText}>Duet - Łączymy muzyków</Text>
            </ImageBackground>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    background: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 70,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    sectionBackground: {
        width: '100%',
        height: 200, // Wysokość sekcji
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20, // Odsunięcie od poprzedniej sekcji
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Czarny dla kontrastu z jasnym tłem
        marginBottom: 10,
        textAlign: 'center',
    },
    sectionText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        lineHeight: 24,
    },
    appPreviewSection: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        marginTop: 20,
    },
    previewTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    appScreenshot: {
        width: 250,
        height: 500,
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    footerBackground: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 10px 10px;
    font-size: 20px;
    color: ${Colors.white};
`;

const ProfileImage = styled.Image`
    margin: 10px 10px;
    margin-top: 50px;
    width: 150px;
    height: 150px;
    border-radius: 360px;
`;


    

const Welcome: FC = () => {
    return (
        <ScrollView style={{backgroundColor: '#000000'}}>
            <ProfileImage source={require('../../assets/Avatar.jpg')}/>
            <WelcomeText>
            Tekken (Japanese: 鉄拳, "Iron Fist") is a Japanese media franchise centered on a series of fighting video and arcade games developed and published by Bandai Namco Entertainment. The franchise also includes film and print adaptations.

The main games in the series follow the events of the King of Iron Fist Tournament, hosted by the Mishima Zaibatsu, where players control a plethora of characters to win the tournament and gain control of the company; the conflict between the Mishima family serves as the main focus of the series' plot, while players explore other characters' motivations in aiming to control the Zaibatsu.

Gameplay focuses on hand-to-hand combat with an opponent, with the gameplay system including blocks, throws, escapes, and ground fighting. The series later introduced combos and special moves, with characters also able to stage break arenas. Tekken is noted as being one of the first fighting games at the time to use 3D animation.

Japanese video game developer Namco began the series in 1994, with the release of the self-titled first entry. As of 2017, it has nine additional entries, eight spin-off games, and has been adapted into three feature films and other media. Tekken 2, as well as the third game Tekken 3, are considered landmark titles; they received critical acclaim for their gameplay and more immersive experience. Subsequent titles have followed this concept, and received generally positive critical responses.

The series has been universally acclaimed and commercially successful, having shipped more than 49 million units, making it one of the best-selling video game franchises of all time, and the second best-selling fighting game franchise in history.[1] The main series has been widely credited by critics and video game publications for raising the standards of fighting games, praising it for its gameplay mechanics and replay value.
            </WelcomeText>
        </ScrollView>
    );
};

export default Welcome;
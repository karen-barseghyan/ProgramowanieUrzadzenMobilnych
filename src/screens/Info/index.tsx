import React, { FC } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';


const Container = styled.View`
    margin: 5px 5px;
    flexDirection: row;
    backgroundColor: ${Colors.black};
    padding: 5px 5px 5px 5px;
    border: 4px solid ${Colors.red};
`;

const MyScrollView = styled.ScrollView`

margin-bottom:80px;

`

const Description = styled.Text`
    font-size: 15px;
    color: ${Colors.white};
    width: 48%;
    margin: 0 0 5px 5px;
    padding: 0;
`;

const FighterImage = styled.Image`
    maxWidth: 48%;
    height: 100%;
    resizeMode: contain;
`;

const Info: FC = () => {
    return (
        
        <MyScrollView style={{paddingTop: 40, backgroundColor: '#000000'}}>
            <Container>
            <FighterImage source={require('../../assets/Miguel.jpg')}/>
                <Description>              
                Miguel is a rather blood-thirsty and rebellious character, whose reckless nature can be seen as both his weakness and his strength.Miguel is depicted as an undisciplined Spaniard with a very intense passion for fighting, which often brought him into conflict with others. Despite being born into a conservative family, his wild and unruly nature made him the black sheep.
                </Description>
            </Container>

            <Container>
                <Description>
                Jin Kazama is the son of Jun Kazama and Kazuya Mishima. Jun's intimate relationship with Kazuya grew and she became pregnant with Jin. The devil within Kazuya attempted to enter Jin while he was still in his mother's womb, but Jun managed to fight it off. Afterwards, Jun moved to a remote location in the mountains, where she raised Jin and trained him in the Kazama family's self-defense fighting style.
                </Description>
                <FighterImage source={require('../../assets/Jin.jpg')}/>
            </Container>

            <Container>
                <FighterImage source={require('../../assets/Negan.jpg')}/>
                <Description>
                Negan was chosen as the fourth guest character for Tekken 7 partly due to Katsuhiro Harada and Michael Murray being huge fans of The Walking Dead TV show and Negan's character in it, and due to them thinking he would be a "perfect fit" for Tekken.
                Negan was first teased at EVO 2018 as part of the second wave of Tekken 7 DLC characters.
                </Description>
            </Container>

            <Container>  
                <Description>
                Armor King II's past is shrouded in mystery. What is known is that he and his older brother were a wrestling tag team, both using the same outfit and name. Why his brother decided to keep this a secret from King II while he was training him to be the successor of the original King is unknown. Armor King II is an enigmatic figure, revealing little of his personality. 
                </Description>
                <FighterImage source={require('../../assets/ArmorKing.jpg')}/>
            </Container>
            
            <Container>
                <FighterImage source={require('../../assets/Lei.jpg')}/>
                <Description>
                A man who lives for his job. Dedicated to the point of obsession, Lei is a law-abiding and gifted cop. He is fair-minded and affable to those around him (unless they break the law). In his Tekken 5 interludes, he is shown treating his friends (such as Wang Jinrei and Steve Fox) with compassion and respect.
                </Description>
            </Container>

        </MyScrollView>
      
    );
};

export default Info;
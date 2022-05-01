import React from 'react';
import { Container, Wrap, LogoWrap, Logo, Menu, MenuItem, MenuLink, RightSection, SignIn } from './style';
const Header = () => {
    return (
        <Container>
            <Wrap>
                <LogoWrap href="/">
                    <Logo />
                </LogoWrap>
                <Menu>
                    <MenuItem>
                        <MenuLink>
                            Фильмы
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>
                            Сериалы
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>
                            ТВ
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>
                            Мультфильмы
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>
                            Аниме
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>
                            Подборки
                        </MenuLink>
                    </MenuItem>
                </Menu>
                <RightSection>
                    <SignIn>Войти</SignIn>
                </RightSection>
            </Wrap>
        </Container>
    )
}

export default Header
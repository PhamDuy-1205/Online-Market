<script setup>
import commonVisual from '@/common/image';
import variable from '@/common/variable';

// ==========[Biến ẩn hiện menu box khi màn hình từ size Ipad trở xuống]==========
var menuBoxDisplay = ref(false);

// ==========[Click ra ngoài để đóng menu box - START]==========
// const menuBox = ref(null)
// const handleClick = (element) => {
//     if(!menuBox.value.contains(element.target)){
//         menuBoxDisplay.value = false
//         return console.log('Inside')
//     }
//     return console.log('Outside')
// }

// onMounted(() => {
//     window.addEventListener('click', handleClick)
//     console.log('add event')
// })

// onBeforeUnmount(() => {
//     window.removeEventListener('click', handleClick)
//     console.log('remove event')
// })
// ==========[Click ra ngoài để đóng menu box - END]==========

</script>

<template>
    <div class="header" id="navbar">
        <div class="header-bar-background">
            <div class="first-floor">
                <div class="left">
                    <img :src="commonVisual.yellow_position_marker" alt="yellow_position_marker" class="icons">
                    <p class="content nav-bar-hover">123 Street, New York</p>
                    <img :src="commonVisual.yellow_email" alt="yellow_email" class="icons">
                    <p class="content nav-bar-hover">Email@Example.com</p>
                </div>
                
                <div class="right">
                    <p class="nav-bar-hover">Privacy Policy</p>
                    <p class="content">/</p>
                    <p class="nav-bar-hover">Terms of Use</p>
                    <p class="content">/</p>
                    <p class="nav-bar-hover">Sales and Refunds</p>
                </div>
            </div>
        </div>
        <div class="header-navbar">
            <p class="web-name nav-bar-hover">{{ variable.webName }}</p>
            <div class="navbar-menu">
                <p class="nav-items nav-bar-hover">Home</p>
                <p class="nav-items nav-bar-hover">Shop</p>
                <p class="nav-items nav-bar-hover">Shop Details</p>
            </div>
            <div class="navbar-icons-container">
                <img :src="commonVisual.green_search" alt="Green Search" class="navbar-icons nav-bar-hover">
                <img :src="commonVisual.green_cart" alt="Green Cart" class="navbar-icons nav-bar-hover">
                <img :src="commonVisual.green_user_profile" alt="Green User Profile" class="navbar-icons nav-bar-hover">
            </div>
            <div class="menu-container" @click="menuBoxDisplay = !menuBoxDisplay">
                <img :src="commonVisual.green_menu" alt="" class="menu-icon">
            </div>
        </div>
        <div class="menu-box" ref="menuBox" v-show="menuBoxDisplay" name="fade">
            <div>
                <p class="menu-box-items nav-bar-hover">Home</p>
                <p class="menu-box-items nav-bar-hover">Shop</p>
                <p class="menu-box-items nav-bar-hover">Shop Details</p>
            </div>
            <div class="navbar-icons-container">
                <img :src="commonVisual.green_search" alt="Green Search" class="navbar-icons nav-bar-hover">
                <img :src="commonVisual.green_cart" alt="Green Cart" class="navbar-icons nav-bar-hover">
                <img :src="commonVisual.green_user_profile" alt="Green User Profile" class="navbar-icons nav-bar-hover">
            </div>
        </div>
        
    </div>
</template>


<style lang="scss">

.header {
    font-family: "Open Sans",sans-serif;
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header-bar-background {
        display: flex;
        justify-content: center;
        width: 69.5vw;
        height: 4.25rem;
        border-radius: 120px 45px;
        background-color: var(--firstMainColor);

        .first-floor {
            color: white;
            font-size: 0.875em;
            margin: 0 25px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            .left {
                display: flex;
                justify-content: center;
                align-items: center;
    
                .content {
                    margin-right: 10px;
                }
            }
    
            .right {
                display: flex;
                justify-content: center;
                align-items: center;
    
                .content {
                    margin: 5px;
                }
            }
        }
    }

    .header-navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
        height: 8.1rem;

        .web-name {
            font-size: 2.5rem;
            font-weight: 800;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            color: var(--firstMainColor);
        }

        .navbar-menu {
            display: flex;
            justify-content: space-between;

            .nav-items {
                margin: 0 15px;
                display: flex;
                align-items: end;
                font-size: 16px;
                font-weight: 600;
                color: var(--gray);
            }
        }

        .navbar-icons-container {
            display: flex;

            .navbar-icons {
                margin-right: 1.5rem;
                width: 2rem;
                display: flex;
                align-items: center;
                opacity: 0.8;
            }
            .navbar-icons:hover {
                opacity: 1;
            }

        }
        .menu-container {
            display: none;
            .menu-icon {
                width: 1rem;
            }
        }
        .menu-box {
            position: absolute;
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 90%;
            top: 6rem;
            padding: 1rem 1rem;
            background-color: white;
            border: 2px solid var(--gray);
            border-radius: 20px;

            .menu-box-items {
                width: fit-content;
                margin-bottom: 0.25rem;
                color: var(--gray);
            }

            .navbar-icons-container {
                display: flex;
                .navbar-icons {
                    margin-right: 1.5rem;
                    width: 2rem;
                    display: flex;
                    align-items: center;
                    opacity: 0.8;
                }
                .navbar-icons:hover {
                    opacity: 1;
                }
            }
        }

    }
    
    .icons{
        width: 1rem;
        height: 1rem;
        margin: 0 5px;
    }

    .nav-bar-hover:hover {
        cursor: pointer;
        color: var(--secondMainColor) !important;
        transition: .1s;
        transform: translateY(-0.1rem) !important;
    }

}

// // Size Phone
@media only screen and  (max-width: 779px) and (min-width: 350px) {
    .header {
        font-family: "Open Sans",sans-serif;
        height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header-bar-background {
            display: none;
            justify-content: center;
            width: 69.5vw;
            height: 4.25rem;
            border-radius: 120px 45px;
            background-color: var(--firstMainColor);

            .first-floor {
                color: white;
                font-size: 0.875em;
                margin: 0 25px;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                .left {
                    display: flex;
                    justify-content: center;
                    align-items: center;
        
                    .content {
                        margin-right: 10px;
                    }
                }
        
                .right {
                    display: flex;
                    justify-content: center;
                    align-items: center;
        
                    .content {
                        margin: 5px;
                    }
                }
            }
        }

        .header-navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            height: 8.1rem;
            position: relative;

            .web-name {
                font-size: 3.5rem;
                font-weight: 800;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 100%;
                color: var(--firstMainColor);
            }

            .navbar-menu {
                display: none;
                justify-content: space-between;

                .nav-items {
                    margin: 0 50rem;
                    display: flex;
                    align-items: end;
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--gray);
                }
            }

            .navbar-icons-container {
                display: none;

                .navbar-icons {
                    margin-right: 1.5rem;
                    width: 2rem;
                    display: flex;
                    align-items: center;
                    opacity: 0.8;
                }
                .navbar-icons:hover {
                    opacity: 1;
                }

            }
            .menu-container {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--firstMainColor);
                border-radius: 10px;

                .menu-icon {
                    margin: 10px;
                    width: 3rem;
                    height: 2rem;
                }
            }
            .menu-container:hover {
                border-width: 3px;
                cursor: pointer;
            }
            .menu-container:active {
                transform: translateY(2px)
            }
        }
        .menu-box {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 90%;
            top: 6rem;
            padding: 1rem 1rem;
            background-color: white;
            border: 2px solid var(--gray);
            border-radius: 20px;

            .menu-box-items {
                width: fit-content;
                margin-bottom: 0.25rem;
                color: var(--gray);
            }

            .navbar-icons-container {
                display: flex;
                .navbar-icons {
                    margin-right: 1.5rem;
                    width: 2rem;
                    display: flex;
                    align-items: center;
                    opacity: 0.8;
                }
                .navbar-icons:hover {
                    opacity: 1;
                }
            }
        }

        
        .icons{
            width: 1rem;
            height: 1rem;
            margin: 0 5px;
        }

        .nav-bar-hover:hover {
            cursor: pointer;
            color: var(--secondMainColor) !important;
            transition: .1s;
            transform: translateY(-0.1rem) !important;
        }

    }
};

// // Size Tablet
@media only screen and (max-width: 1100px) and (min-width: 780px) {
    .header {
        font-family: "Open Sans",sans-serif;
        height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header-bar-background {
            display: none;
            justify-content: center;
            width: 69.5vw;
            height: 4.25rem;
            border-radius: 120px 45px;
            background-color: var(--firstMainColor);

            .first-floor {
                color: white;
                font-size: 0.875em;
                margin: 0 25px;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                .left {
                    display: flex;
                    justify-content: center;
                    align-items: center;
        
                    .content {
                        margin-right: 10px;
                    }
                }
        
                .right {
                    display: flex;
                    justify-content: center;
                    align-items: center;
        
                    .content {
                        margin: 5px;
                    }
                }
            }
        }

        .header-navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            height: 8.1rem;
            position: relative;

            .web-name {
                font-size: 3.5rem;
                font-weight: 800;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 100%;
                color: var(--firstMainColor);
            }

            .navbar-menu {
                display: none;
                justify-content: space-between;

                .nav-items {
                    margin: 0 50rem;
                    display: flex;
                    align-items: end;
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--gray);
                }
            }

            .navbar-icons-container {
                display: none;

                .navbar-icons {
                    margin-right: 1.5rem;
                    width: 2rem;
                    display: flex;
                    align-items: center;
                    opacity: 0.8;
                }
                .navbar-icons:hover {
                    opacity: 1;
                }

            }
            .menu-container {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--firstMainColor);
                border-radius: 10px;

                .menu-icon {
                    margin: 10px;
                    width: 3rem;
                    height: 2rem;
                }
            }
            .menu-container:hover {
                border-width: 3px;
                cursor: pointer;
            }
            .menu-container:active {
                transform: translateY(2px)
            }
        }
        .menu-box {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 90%;
            top: 6rem;
            padding: 1rem 1rem;
            background-color: white;
            border: 2px solid var(--gray);
            border-radius: 20px;
            transition: .5s;

            .menu-box-items {
                width: fit-content;
                margin-bottom: 0.25rem;
                color: var(--gray);
            }

            .navbar-icons-container {
                display: flex;
                .navbar-icons {
                    margin-right: 1.5rem;
                    width: 2rem;
                    display: flex;
                    align-items: center;
                    opacity: 0.8;
                }
                .navbar-icons:hover {
                    opacity: 1;
                }
            }
        }

        
        .icons{
            width: 1rem;
            height: 1rem;
            margin: 0 5px;
        }

        .nav-bar-hover:hover {
            cursor: pointer;
            color: var(--secondMainColor) !important;
            transition: .1s;
            transform: translateY(-0.1rem) !important;
        }

        
    }
};

</style>
import {
    Lightbulb,
    LogOut,
    Mail,
    Menu,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MenuDashboard = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size='sm' className='rounded-sm h-auto py-1.5 px-2'>
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Perfil</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
 
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Configuracion</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Lightbulb className="mr-2 h-4 w-4" />
                            <span>Segerencias</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>

                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <Mail className="mr-2 h-4 w-4" />
                                    <span>Email</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    <span>Mensajes</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    <span>Mas...</span>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                            
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>Equipo</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar Sesion</span>
                    <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MenuDashboard

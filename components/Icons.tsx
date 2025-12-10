import React from 'react';
import { Star, ChevronRight, Square, Box, Layers, User, Calendar, Monitor, Cpu } from 'lucide-react';

export const IconStar = ({ className }: { className?: string }) => <Star className={className} />;
export const IconArrowRight = ({ className }: { className?: string }) => <ChevronRight className={className} />;
export const IconSquare = ({ className }: { className?: string }) => <Square className={className} fill="currentColor" />;
export const IconBox = ({ className }: { className?: string }) => <Box className={className} />;
export const IconLayers = ({ className }: { className?: string }) => <Layers className={className} />;
export const IconUser = ({ className }: { className?: string }) => <User className={className} />;
export const IconCalendar = ({ className }: { className?: string }) => <Calendar className={className} />;
export const IconMonitor = ({ className }: { className?: string }) => <Monitor className={className} />;
export const IconCpu = ({ className }: { className?: string }) => <Cpu className={className} />;
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
export const getAllUsers = async () => {
	const users = await db.user.findMany();
	return users;
};

export const getUserById = async (id: string) => {
	const user = await db.user.findUnique({ where: { id } });
	return user;
};

export const deleteUser = async (id: string) => {
	await db.session.deleteMany({ where: { userId: id } });
	const user = await db.user.delete({ where: { id } });
	revalidatePath('/admin/users');
	return user;
};

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const getAllUsers = async () => {
	try {
		const users = await db.user.findMany({
			select: {
				id: true,
				name: true,
				email: true,
				phone: true,
				walletBalance: true,
				refcode: true,
				isVerified: true,
				createdAt: true,
				profitBalance: true,
				investmentBalance: true,
			},
		});
		console.log('Fetched users:', JSON.stringify(users, null, 2));
		return users;
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
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
